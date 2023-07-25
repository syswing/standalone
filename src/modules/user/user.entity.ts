import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500,nullable:true })
  password: string;

	@Column({nullable:true})
  account: string;

  @Column({nullable:true})
  username:string;

  @Column({nullable:true})
  avatar:string;

  @Column({nullable:true})
  email:string;
 
  @Column('simple-enum', { enum: ['root', 'author', 'visitor'],default:'visitor' })
  role: string;

  @BeforeInsert() 
  async encryptPwd() { 
    this.password = await bcrypt.hashSync(this.password,10); 
  } 
}