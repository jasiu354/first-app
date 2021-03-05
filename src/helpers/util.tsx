import cities from './cities'
import c from './connections'


let adjLists : number[][];

function find(city : string){
  for(let i = 0; i < cities.length; i++){
    if(cities[i].value === city)
      return i;
  }
  return 0;
}

function printAllPathsUtil(u : number, d : number,
      isVisited : boolean[], pathList : number[]){
      if(u === d){
        console.log(pathList);
        return;
      }
      isVisited[u] = true;

      for(let i = 0; i < adjLists[u].length; i++){
          if(!isVisited[adjLists[u][i]]){
            pathList.push(adjLists[u][i]);
            printAllPathsUtil(adjLists[u][i],d,isVisited,pathList);
            const index = pathList.indexOf(adjLists[u][i]);
            pathList.pop();
          }
      }
    isVisited[u] = false;
}

function printAllPaths(s : number, d : number){
  let visited : boolean[];
  let paths : number[];
  paths = [];
  visited = [];
  for (let i = 0; i < cities.length; i++){  
    visited.push(false);
  }
  printAllPathsUtil(s,d,visited,paths);
  
}

export function init () {
  adjLists = [];
  for (let i = 0; i < cities.length; i++){
    adjLists[i] = [];
  }
  for(let i = 0; i < c.length; i++){
    adjLists[find(c[i][0])].push(find(c[i][1]));
  }
  console.log(adjLists);
  printAllPaths(2,5);
}
