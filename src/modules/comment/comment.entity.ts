import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

	@Column('text')
  content: string;

	@Column()
  email: string;

	@Column()
	nickname:string;

	@Column('int',{default:0})
	agreements:number;

	@Column('int',{default:0})
	disagreements:number;
	
	@CreateDateColumn()
	create_at:string;

	@UpdateDateColumn()
	update_at:string;

	@Column('int',{default:0})
	reply:number;
}