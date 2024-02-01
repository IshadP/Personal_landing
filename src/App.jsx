import logo from './assets/logo.svg';
import instagram from './assets/instagram.svg';
import linkedin from './assets/linkedin.svg';
import dribbble from './assets/dribbble.svg';
import behance from './assets/behance.svg';

function App(){
  return(
    <div className=''>
      <div className='w-full flex justify-center md:justify-between items-center'>
      <div className="p-6"><img src={logo}/></div>
      <div className='px-6 absolute top-[15px] right-0'><p className='font-SpaceMono text-text md:text-[20px] md:block hidden'>ishadpande16@gmail.com</p></div>
      </div>
      <div className='flex flex-col md:gap-[119px] gap-[10vh] justify-center items-center pt-[10vw] md:pt-0'>
        <div className='border-2 border-text rounded-[10px] w-[90vw] md:w-[40vw] px-6'>
          <div className='relative '>
            <p className='font-SpaceMono text-text md:text-[80px] text-[48px]'>SOMETHING</p>
            <p className='absolute md:left-[5px] md:top-[5px] left-[1vw] top-[0.5vh] font-SpaceMono text-transparent outline-text md:text-[80px] text-[48px]'>SOMETHING</p>
          </div>
          <div className='relative'>
            <p className='font-SpaceMono text-text md:text-[80px] text-[48px]'>IS</p>
            <p className='absolute md:left-[5px] md:top-[5px] left-[1vw] top-[0.5vh]  font-SpaceMono text-transparent outline-text md:text-[80px] text-[48px]'>IS</p>
          </div>
          <div className='relative'>
            <p className='font-SpaceMono text-text md:text-[80px] text-[48px]'>BREWING...</p>
            <p className='absolute md:left-[5px] md:top-[5px] left-[1vw] top-[0.5vh]  font-SpaceMono text-transparent outline-text md:text-[80px] text-[48px]'>BREWING...</p>
          </div>
        </div>
        <div className='font-PortSans text-text-fade md:text-[28px] text-[5vw] text-center'>Ya, it takes a lot of cups of coffee to make!</div>
        <div className='flex justify-between items-center md:w-[40vw] w-[90vw] p-6'>
          <a href='https://www.instagram.com/ishad_pande' target='_blank' ><img src={instagram} className='border-4 hover:border-text-fade rounded-xl border-bg'/></a>
          <a href='https://www.linkedin.com/in/ishad-pande-049305259/' target='_blank'><img src={linkedin} className='border-4 hover:border-text-fade rounded-sm border-bg' /></a>
          <a href='https://dribbble.com/IshadP' target='_blank'><img src={dribbble} className='border-4 hover:border-text-fade rounded-xl border-bg'/></a>
          <a href='https://www.behance.net/ishadpande' target='_blank'><img src={behance} className='border-4 hover:border-text-fade rounded-xl border-bg'/></a>
          </div>
      </div>
      <div className='font-PortSans text-text-fade lm:text-[20px] text-center px-6'>Feel free to contact me on these platforms</div>
    </div>
  )
}

export default App;
