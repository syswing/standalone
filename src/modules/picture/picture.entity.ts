import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Picture {
	@PrimaryGeneratedColumn()
  id: number;

	// 存放路径
	@Column()
	path:string;

	// 文件名称
	@Column({default:''})
	name:string;
}
