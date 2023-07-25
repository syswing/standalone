import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Tag {
	@PrimaryGeneratedColumn()
  id: number;

	// 中文名
	@Column()
	ch:string;

	// 英文名
	@Column()
  en: string;
}
