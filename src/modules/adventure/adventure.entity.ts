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

	@Column()
  name: string;
  
	/**
	 * 回复列表，逗号分隔
	*/
	@Column({nullable:true})
	reply_comment:string;

	/**
	 * 顶
	*/
	@Column('int',{default:0})
	up:number;

	/**
	 * 踩
	*/
	@Column('int',{default:0})
	down:number;

	/**
	 * 标签，逗号分隔
	*/
	@Column({nullable:true})
  tag: string;

	/**
	 * 是否发布
	*/
	@Column('boolean',{default:true})
	isPublish:boolean;
}