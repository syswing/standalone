import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Adventure {
	@PrimaryGeneratedColumn()
  id: number;

	@Column('text')
  content: string;

	@CreateDateColumn()
	create_at:Date;

	@UpdateDateColumn()
	update_at:Date;

	
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
	 * 是否发布 是否是草稿
	*/
	@Column('boolean',{default:false})
	isPublish:boolean;

	@Column('int',{default:0})
	main_pic_id:number;
}