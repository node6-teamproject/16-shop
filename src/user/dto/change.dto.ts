import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ChangeDto {
    @IsEmail()
    @IsNotEmpty({ message: '이메일을 입력해주세요.' })
    email: string;

    @IsString()
    @IsNotEmpty({ message: '직업을 입력해주세요.' })
    role: string;
}