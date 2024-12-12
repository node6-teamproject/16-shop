document.addEventListener('DOMContentLoaded', function () {
  const regions = [
    {
      name: 'Gyeonggi',
      korName: '경기도',
      color: '#3498db',
      icon: '🏢',
      description: '대한민국의 수도권 중심지입니다.',
    },
    {
      name: 'Gangwon',
      korName: '강원도',
      color: '#e74c3c',
      icon: '⛰️',
      description: '아름다운 산과 바다가 있는 관광의 중심지입니다.',
    },
    {
      name: 'North Chungcheong',
      korName: '충청북도',
      color: '#f1c40f',
      icon: '🌄',
      description: '내륙 중심의 교통과 물류의 요충지입니다.',
    },
    {
      name: 'South Chungcheong',
      korName: '충청남도',
      color: '#27ae60',
      icon: '🌊',
      description: '서해안의 수산업과 농업이 발달한 지역입니다.',
    },
    {
      name: 'North Jeolla',
      korName: '전라북도',
      color: '#9b59b6',
      icon: '🍚',
      description: '한국 전통 음식의 본고장입니다.',
    },
    {
      name: 'South Jeolla',
      korName: '전라남도',
      color: '#e67e22',
      icon: '🌾',
      description: '비옥한 평야와 청정 해역을 보유한 지역입니다.',
    },
    {
      name: 'North Gyeongsang',
      korName: '경상북도',
      color: '#1abc9c',
      icon: '🗻',
      description: '한국의 전통문화와 역사가 살아있는 곳입니다.',
    },
    {
      name: 'South Gyeongsang',
      korName: '경상남도',
      color: '#d35400',
      icon: '🏖️',
      description: '항만 물류와 해양 관광의 중심지입니다.',
    },
    {
      name: 'Jeju',
      korName: '제주도',
      color: '#7f8c8d',
      icon: '🌴',
      description: '아름다운 자연과 독특한 문화가 있는 관광의 섬입니다.',
    },
  ];

  // 광역시 색상 설정 추가
  const metropolitanCities = [
    { id: 'KR-28', color: '#3498db' }, // 인천 (경기도 색)
    { id: 'KR-30', color: '#27ae60' }, // 대전 (충남 색)
    { id: 'KR-29', color: '#e67e22' }, // 광주 (전남 색)
    { id: 'KR-27', color: '#1abc9c' }, // 대구 (경북 색)
    { id: 'KR-31', color: '#d35400' }, // 울산 (경남 색)
    { id: 'KR-26', color: '#d35400' }, // 부산 (경남 색)
  ];

  // 좌우 지역 목록 생성
  const leftList = document.querySelector('.region-list.left');
  const rightList = document.querySelector('.region-list.right');

  regions.forEach((region, index) => {
    const regionElement = `
            <div class="region-item">
                <div class="region-icon" style="background-color: ${region.color}">
                    ${region.icon}
                </div>
                <div class="region-info">
                    <div class="region-name">${region.korName}</div>
                    <div class="region-desc">${region.description}</div>
                </div>
            </div>
        `;

    // 좌우 목록에 지역 추가
    const listElement = index < regions.length / 2 ? leftList : rightList;
    listElement.innerHTML += regionElement;
  });

  // SVG 지도 색상 설정 및 클릭 이벤트 추가
  const svgObject = document.getElementById('korea-map');
  svgObject.addEventListener('load', function () {
    const svgDoc = svgObject.contentDocument;
    const paths = svgDoc.querySelectorAll('path');

    paths.forEach((path) => {
      const pathId = path.getAttribute('id');
      const region = regions.find((r) => r.name === path.getAttribute('title'));
      const metro = metropolitanCities.find((m) => m.id === pathId);

      if (region) {
        path.style.fill = region.color;
        path.setAttribute('data-region', region.name);
      } else if (metro) {
        path.style.fill = metro.color;
        path.setAttribute('data-region', metro.id);
      }

      path.style.stroke = '#FFFFFF';
      path.style.strokeWidth = '1';

      // 클릭 이벤트 추가
      path.addEventListener('click', function () {
        // 모든 지역 초기화
        paths.forEach(p => {
          p.style.transform = '';
          p.style.filter = '';
        });

        // 클릭된 지역 활성화
        this.style.transform = 'translate(10px, -10px) scale(1.2)';
        this.style.filter = 'drop-shadow(3px 3px 5px rgba(0,0,0,0.5))';
        this.style.transition = 'all 0.3s ease-out';
        
        // 선택된 지역 이름 콘솔 출력 (테스트용)
        console.log(`Selected Region ID or Name : ${this.getAttribute('data-region')}`);
      });
    });
  });
});
