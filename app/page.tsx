import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Belogs from "./Components/Belogs";
//import Practice from './practice'

const inter = Inter({ subsets: ["latin"] });
async function getBlogs() {
  const res = await fetch(
    `https:cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=profile`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const prof = await getBlogs();
  

  return (
    <>
      <div className='bg-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5 '>
        {prof.items.map((profs: any) => (
          <div className='bg-white p-6' key={profs.sys.id}>
            {prof.includes.Asset.map((elem: any) => (
              <div key={profs.fields.image.sys.id}>
                {profs.fields.image.sys.id == elem.sys.id ? (
                  <Image
                    src={"https:" + elem.fields.file.url}
                    alt=''
                    width={300}
                    height={300}
                    className='h-64 mx-auto'
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ))}

            <h1 className='text-3xl text-blue-500 py-2'>{profs.fields.heading}</h1>
            <p className='text-md py-2'>{profs.fields.discription}</p>
            <h2 className='text-xl text-red-500'>{profs.fields.price}</h2>
          </div>
        ))}
      </div>
    </>
  );
}
