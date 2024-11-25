import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  //IsNotEmpty 비어 있는 값을 허용하지 않는다
  @IsNotEmpty({ message: '이메일을 입력해주세요.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: '닉네임을 입력해주세요.' })
  nickname: string;

  @IsString()
  @IsNotEmpty({ message: '주소를 입력해주세요.' })
  address: string;

  @IsString()
  @IsNotEmpty({ message: '전화번호를 입력해주세요.' })
  phone: number;
}