import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Route } from "./routes.entity";


@Injectable()
export class RouteService {
	constructor(
		@Inject('ROUTE_REPOSITORY')
		private readonly routeRepository: Repository<Route>
	) {}

	async addRoute(body){
        const route = new Route()
		route.name = body.name
		route.path = body.path
        route.title = body.title
        route.description = body.description
        route.icon = body.icon
        route.parentId = body.parentId
        route.isActive = body.isActive
        route.isDeleted = body.isDeleted
        return await this.routeRepository.save(route)
	}

	async list(){
		return await this.routeRepository.find()
	}

	async delRoute(body){
        let targetRoute = await this.routeRepository.findOne({
            where: {
                id: body.id
            }
        })
        return await this.routeRepository.remove(targetRoute)
    }

	async editRoute(body){
        let targetRoute = await this.routeRepository.findOne({
            where: {
                id: body.id
            }
        })
        targetRoute.name = body.name
        targetRoute.path = body.path
        targetRoute.title = body.title
        targetRoute.description = body.description
        targetRoute.icon = body.icon
        targetRoute.parentId = body.parentId
        targetRoute.isActive = body.isActive
        targetRoute.isDeleted = body.isDeleted
        return await this.routeRepository.save(targetRoute)
    }

	async findAll() {
		return [];
	}
}

