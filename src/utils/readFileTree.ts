import * as fs from 'node:fs'
/**
 * @params relativePath 根路径
*/

export interface DirObj {
	name: string;
	type: 'dir' | 'file',
	childD: Array<DirObj>;
	childF: Array<DirObj>;
}

export default async (relativePath) => {
	function needIgnore(name, ignoreList) {
		var result = false;
		ignoreList.forEach(function (regExp) { if (regExp.test(name)) result = true; });
		return result;
	}
	/* *
	* 名称：dirDFS
	* 功能：DFS遍历文件夹
	* 作者：guzheyuan
	* 输入：path [string]  --目录路径
	*       dirName [string]  --目录名称
	*       ignoreList [arr]  --正则表达式数组，匹配成功的将忽略  
	* 输出：result [obj]  --树形json对象
	*/
	function dirDFS(path, dirName, ignoreList) {
		// path是否合法
		var rootStat = fs.statSync(path);
		if (!rootStat.isDirectory()) {
			console.log("\"" + path + "\" is not directory");
			return null;
		}
		// 初始化json对象
		var result = new Object();
		result["name"] = dirName;
		result["type"] = "dir"
		result["childD"] = [];
		result["childF"] = [];

		// 从根目录开始遍历所有文件
		const files = fs.readdirSync(path);
		files.forEach(function (fileName) {
			var stat = fs.statSync(path + '/' + fileName);
			// 忽略当前文件／目录
			if (needIgnore(fileName, ignoreList)) {
				// 这是一个文件夹
			} else if (stat.isDirectory()) {
				var dirObj = dirDFS(path + "/" + fileName, fileName, ignoreList)
				result["childD"].push(dirObj);
				// 这是一个文件
			} else {
				var fileObj = new Object();
				fileObj["name"] = fileName;
				fileObj["path"] = path + '/' + fileName
				fileObj["type"] = "file";
				result["childF"].push(fileObj);
			}
		});
		return result;
	}
	return dirDFS(relativePath, 'adventure', [])
}