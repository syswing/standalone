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

	// 关联adventure_id主键
	@Column({default:''})
	adventure_id:string;

	// 描述
	@Column({default:''})
	description:string;
}
