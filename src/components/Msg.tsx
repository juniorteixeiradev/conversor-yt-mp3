
type props = {
    msg:string
}
export default function Msg(props:props){
    if(props.msg == "ok"){
        return(
            <div 
            className=" text-sm font-light bg-green-600 p-2 rounded-md border-solid border-2 border-green-800">
                Tudo certo o o arquivo será baixado em instantes!
            </div>
        )
    }
    if(props.msg == "no"){
        return(
            <div
            className=" text-sm font-light bg-red-600 p-2 rounded-md border-solid border-2 border-red-800"
            >
                Algo não saiu bem, verifique a url do video!
            </div>
        )
    }
    if(props.msg == "manyr"){
        return(
            <div
            className=" text-sm font-light bg-violet-600 p-2 rounded-md border-solid border-2 border-violet-800"
            >
                Parece que você já converteu mais de 7 videos hoje, volte amanha e tente novamente 😓😓😓😓
            </div>
        )
    }
}