import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Adventure {
	@PrimaryGeneratedColumn()
  id: number;

	@Column('text')
  content: string;

	@CreateDateColumn()
	create_at:string;

	@UpdateDateColumn()
	update_at:string;

	/**
	 * 回复列表，逗号分隔
	*/
	@Column({nullable:true})
	reply_comment:string;
}