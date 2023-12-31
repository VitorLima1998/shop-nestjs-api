import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Iphone 14Pro Max',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'This is an iPhone 14 Pro Max with 256GB of memory.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 999.99,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 10,
  })
  @IsInt()
  stock: number;

  @IsString()
  categoryId: string;
}
