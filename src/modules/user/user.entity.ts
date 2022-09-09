import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  password: string;

	@Column()
  account: string;

  @Column()
  username:string;

  @Column()
  avatar:string;

  @Column()
  email:string;
 
  @Column('simple-enum', { enum: ['root', 'author', 'visitor'],default:'visitor' })
  role: string;

  @BeforeInsert() 
  async encryptPwd() { 
    this.password = await bcrypt.hashSync(this.password,10); 
  } 
}