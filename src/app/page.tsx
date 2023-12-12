"use client"
import { useEffect, useRef, useState } from "react";
import { Loading, MainImg} from "@/components/Icons";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Input";
import useApi from "@/api/api";
import Msg from "@/components/Msg";
import Title1 from "@/components/Title1";
import Link from "next/link";


export default function Home() {
  const ref = useRef<HTMLInputElement | any>(null);

  const [isLoading, setIsloading] = useState(false);
  const [sucess, setSucess] = useState<String>();

  const { api } = useApi();

  //chamada de api
  async function chamaApi(url:string){
        const data =  await api(url)
        .then((res:any) =>{
              return res.data
          })
          .catch((err) =>{
              throw err
          });

          console.log({link: data.link})
          setSucess("ok")
          setIsloading(false)
          
          if (data.code === 403) {
            setSucess("no")
            ref.current.value = " "
            setTimeout(() =>{ setSucess("")},4000)

          } else {
            setTimeout(async () =>{ 
              console.log({link: data.link})
              location.href = await data.link
              setSucess(" ")
              ref.current.value = " "
            },2000)
          }
          
          
          
      }
  


//funcão pra formatar a URL e pegar só o ID do video

async function formatarURL(url:string){
  // const match = await url.match(/[?&]v=([^&]+)/);
  const match = await url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  const videoId:any = match && match[1];
  setIsloading(true);
  
  chamaApi(videoId)

}

  return (
    <Container
      className="  w-full h-[100%] flex justify-center text-gray-50
      items-center flex-col gap-6
      "
    >
      <Title1 className="  flex justify-center items-center text-center text-lg lg:text-4xl font-medium text-[#F8F0FB]">Converta Videos do <p className=" text-violet-600">Youtube em MP3 </p> 
      </Title1>
        <MainImg />

      <Container 
        className="
        backdrop-blur
        items-center justify-center bg-transparent 
        rounded-xl w-10/12 lg:w-6/12  flex flex-col gap-3 "
      >
        

        {isLoading && <Loading />}
        <Container className="flex flex-col justify-center items-center gap-4">
          
          <Input
          placeholder="https://www.youtube.com/watch?v=dbCn0PEgo_E"
            ref={ref}
            className=" rounded-md w-60 h-10 focus:outline-none focus:border-purple-800 focus:ring-purple-800 border-2 ring-2 text-violet-800 " 
            title="Cole a URL do video no formato: https://www.youtube.com/watch?v=dbCn0PEgo_E " labelClassname=" text-center text-gray-50 text-bold text-sm"
          />
          <Button 
          className=" w-24 h-10 rounded bg-[#6320ee] hover:bg-[#8450eb] hover:transition-colors duration-500 ease-in-out border-2 solid border-gray-500"
          title="Baixar"
          onClick={() => formatarURL(ref.current?.value)}
          ></Button>
        </Container>
        {sucess == "ok" && <Msg msg="ok"></Msg>}
        {sucess == "no" && <Msg msg="no"></Msg>}
      </Container>
      <Title1>
        Desenvolvido por <Link href="https://www.linkedin.com/in/junior-teixeiradev/" target="_blank" className=" text-[#6320ee] hover:text-violet-600 font-bold text-lg"> Jun1or Te1xe1ra</Link>
      </Title1>
    </Container>
  )
}
