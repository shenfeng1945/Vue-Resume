import AV from '../lib/leancloud'
export default function(user){
 let {id,attributes:{username}} = user || AV.User.current() || {attributes:{}}
 return {id,username}
}
