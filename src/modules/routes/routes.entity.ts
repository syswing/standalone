import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Route {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: '路由ID' })
    id: number;
             
    @Column({default:''})
    @ApiProperty({ description: '路由名称' })
    name: string;

    @Column({default:''})
    @ApiProperty({ description: '路由路径' })
    path: string;

    @Column({default:''})
    @ApiProperty({ description: '路由标题' })
    title: string;

    @Column({default:''})
    @ApiProperty({ description: '路由描述' })
    description: string;

    @Column({default:''})
    @ApiProperty({ description: '路由图标' })
    icon: string;

    @Column({default:0})
    @ApiProperty({ description: '父级路由ID' })
    parentId: number;

    @Column({default:true})
    @ApiProperty({ description: '是否激活' })
    isActive: boolean;

    @Column({default:false})
    @ApiProperty({ description: '是否删除' })
    isDeleted: boolean;

    @Column({default:()=>'CURRENT_TIMESTAMP'})
    @ApiProperty({ description: '创建时间' })
    createdAt: Date;

    @Column({default:()=>'CURRENT_TIMESTAMP'})
    @ApiProperty({ description: '更新时间' })
    updatedAt: Date;
}
