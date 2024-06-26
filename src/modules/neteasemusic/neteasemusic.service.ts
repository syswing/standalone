import { Injectable } from "@nestjs/common";
import {
	login_cellphone,
	user_detail,
	song_url,
	check_music,
	playlist_detail,
	user_playlist,
	playlist_track_all,
	likelist,
	song_detail
} from 'NeteaseCloudMusicApi'

@Injectable()
export class NeteaseMusicService {
	private cookie : string;

	async login_cellphone(query){
		const result = await login_cellphone({
      phone: query.phone,
      password: query.password
    })
		this.cookie = result.body.cookie
		return result
	}
	// 获取用户详情
	async user_detail (query){
		const result = await user_detail({
      uid:query.uid
    })
		return result
	}
	// 获取音乐url
	async song_url (query){
		const result = await song_url({
      id:query.id,
			br:query.br
    })
		return result
	}
	// 获取音乐 是否可用
	async check_music(query){
		const result = await check_music({
      id:query.id,
			br:query.br
    })
		return result
	}
	// 
	async playlist_detail(query){
		const result = await playlist_detail({
      id:query.id,
			s:query.s
    })
		return result
	}

	async user_playlist(query){
		const result = await user_playlist({
      uid:query.uid,
    })
		return result
	}
	async playlist_track_all(query){
		const result = await playlist_track_all({
      id:query.id,
			s:query.s
    })
		return result
	}
	async likelist(query){
		if(!this.cookie){
			return '请先登录'
		}
		const result = await likelist({
      uid:query.uid,
			cookie:this.cookie
    })
		return result
	}
	async song_detail(query){
		const result = await song_detail({
      ids:query.ids,
    })
		return result
	}
}
