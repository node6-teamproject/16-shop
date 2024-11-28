interface Region {
    name: string;
    lat: number;
    lng: number;
    specialties: string[];
}

class SpecialtyMap {
    private map: naver.maps.Map | null = null;
    private infoWindow: naver.maps.InfoWindow | null = null;
    private regions: Region[];

    constructor(mapDiv: string, clientId: string) {
        this.regions = [
            { name: '경기도', lat: 37.4138, lng: 127.5183, specialties: ['이천 쌀', '안성 배', '포천 막걸리', '가평 잣', '양평 한우'] },
            { name: '강원도', lat: 37.8228, lng: 128.1555, specialties: ['횡성 한우', '평창 산천어', '강릉 커피', '양양 송이', '춘천 닭갈비'] },
            { name: '충청북도', lat: 36.6358, lng: 127.4914, specialties: ['충주 사과', '청주 직지', '보은 대추', '영동 포도', '괴산 고추'] },
            { name: '충청남도', lat: 36.6588, lng: 126.8000, specialties: ['서산 마늘', '논산 딸기', '부여 연꽃', '예산 사과', '공주 밤'] },
            { name: '전라북도', lat: 35.8202, lng: 127.1089, specialties: ['순창 고추장', '고창 복분자', '임실 치즈', '남원 추어탕', '전주 비빔밥'] },
            { name: '전라남도', lat: 34.8160, lng: 126.4629, specialties: ['보성 녹차', '영광 굴비', '담양 죽순', '나주 배', '여수 갓김치'] },
            { name: '경상북도', lat: 36.5760, lng: 128.5055, specialties: ['안동 간고등어', '영덕 대게', '의성 마늘', '상주 곶감', '청도 감'] },
            { name: '경상남도', lat: 35.4606, lng: 128.2132, specialties: ['진주 비빔밥', '남해 멸치', '하동 녹차', '밀양 대추', '통영 굴'] },
            { name: '제주도', lat: 33.4996, lng: 126.5312, specialties: ['제주 감귤', '제주 흑돼지', '제주 한라봉', '제주 옥돔', '제주 녹차'] }
        ];

        this.loadNaverMapsScript(clientId).then(() => {
            this.initMap(mapDiv);
            this.addMarkers();
            this.addJejuPolygon();
        });
    }

    private loadNaverMapsScript(clientId: string): Promise<void> {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
            script.onload = () => resolve();
            document.head.appendChild(script);
        });
    }

    private initMap(mapDiv: string): void {
        this.map = new naver.maps.Map(mapDiv, {
            zoom: 7,
            center: new naver.maps.LatLng(35.95, 127.7),
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.TOP_RIGHT
            }
        });

        this.infoWindow = new naver.maps.InfoWindow({
            content: '',
            maxWidth: 300,
            backgroundColor: "#eee",
            borderColor: "#2db400",
            borderWidth: 2,
            anchorSize: new naver.maps.Size(30, 30),
            anchorSkew: true,
            anchorColor: "#eee",
            pixelOffset: new naver.maps.Point(20, -20)
        });
    }

    private addMarkers(): void {
        if (!this.map || !this.infoWindow) return;

        this.regions.forEach((region) => {
            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(region.lat, region.lng),
                map: this.map
            });

            naver.maps.Event.addListener(marker, 'click', () => {
                const content = `
                    <div class="info-window">
                        <h3>${region.name} 특산품</h3>
                        <ul>
                            ${region.specialties.map(specialty => `<li>${specialty}</li>`).join('')}
                        </ul>
                    </div>
                `;
                if (this.infoWindow && this.map) {
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, marker);
                }
            });
        });

        if (this.map) {
            naver.maps.Event.addListener(this.map, 'click', () => {
                if (this.infoWindow) {
                    this.infoWindow.close();
                }
            });
        }
    }

    private addJejuPolygon(): void {
        if (!this.map) return;

        const jejuPath = [
            new naver.maps.LatLng(33.5219, 126.5419),
            new naver.maps.LatLng(33.4996, 126.5312),
            new naver.maps.LatLng(33.4772, 126.5419)
        ];

        const jejuPolygon = new naver.maps.Polygon({
            paths: [jejuPath],
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: this.map
        });

        naver.maps.Event.addListener(jejuPolygon, 'click', () => {
            alert('제주도 특산품 생산지역입니다.');
        });
    }
}

// 사용 예:
// const specialtyMap = new SpecialtyMap('map', 'YOUR_CLIENT_ID');