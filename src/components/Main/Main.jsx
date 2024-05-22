import React from 'react'
import './Main.css'

const Main = () => {
  return (

    
    <div>
<div className="top-contaner">
<div className='top-text-wrapper'>
<div className="top-text2">
           <span>Personal projects</span>
        </div>
</div>    
        <div className="top-main2">
          
        <div className="grid-wrapper">
	<div className='box-1 big'>
		<img src="src/assets/Main/addtocart1.png" alt="" />
		<div className="dark-layer1">
          </div>
          <div className="box-detail">
           <div className="box-detail-r">
         <span className='box-detail-r-heading'>Add TO Cart Website</span><br />
         <span>React.js,Redux,redux-toolkit,MUI</span>

           </div>
           <a href="https://addtocartreactproject.netlify.app/" target='blank'><div className="box-detail-l">
<div className="arrow-wrapper">
<i className="arrow fa-solid fa-arrow-right"></i>
</div>
           </div></a>
          </div>
	</div>
	<div className='big box-1'>
		<img src="src/assets/Main/gym.png" alt="" />
		<div className="dark-layer1">
          </div>
          <div className="box-detail">
           <div className="box-detail-r">
         <span className='box-detail-r-heading'>The Fit Club Gym </span><br />
         <span>React.js,MUI,Email.js</span>

           </div>
           <a href="https://thefitclubproject.netlify.app/" target='blank'>
           <div className="box-detail-l">
<div className="arrow-wrapper">
<i className="arrow fa-solid fa-arrow-right"></i>
</div>
           </div>
           </a>
          </div>
	</div>
	<div className="box-3 tall tall2">
		
        <img src="src/assets/Main/cripto3.png" alt="" />
		<div className="dark-layer2">
          </div>
          <div className="box-detail" style={{width:"200px", height:"300px", flexDirection:"column"}}>
           <div className="box-detail-r">
         <span style={{width:"20px"}} className='box-detail-r-heading'>Crypto Info Website</span><br />
        <ul style={{paddingLeft:"10px"}}>
			<li>React.js</li>
			<li>CoinGecko API</li>

		</ul>

           </div>
          <a href="https://xcryptoproject.netlify.app/" target='blank'>
          <div className="box-detail-l">
<div className="arrow-wrapper">
<i className="arrow fa-solid fa-arrow-right"></i>
</div>
           </div>
          </a>
          </div>

		
	</div>
	
	
	<div className=" box_2 wide">
    <video id="myVideo" autoPlay loop>
                <source src="src/assets/Main/quizz.mp4" type="video/mp4" />
            </video>
        
  
	</div>
	<div className="big box-1">
		<img src="src/assets/Main/todo.png" alt="" />
		<div className="dark-layer1">
          </div>
          <div className="box-detail">
           <div className="box-detail-r">
         <span className='box-detail-r-heading'>Todo List</span><br />
         <span>React.js,Context Api, Local Storage</span>

           </div>
           <a href="https://todo-app-eta-seven-92.vercel.app/" target="_blank">
           <div className="box-detail-l">
<div className="arrow-wrapper">
<i className="arrow fa-solid fa-arrow-right"></i>
</div>
           </div>
           </a>
          </div>
	</div>
	
	
	<div className="big box-1">
    <img src="src/assets/Main/anime.png" alt="" />
	<div className="dark-layer1">
          </div>
          <div className="box-detail">
           <div className="box-detail-r">
         <span className='box-detail-r-heading'>Bootstrap Website</span><br />
         <span>HTML,CSS,JavaScript,Bootstrap</span>

           </div>
         <a href="https://anime-boot-strap-project.vercel.app/" target='blank'>
         <div className="box-detail-l">
<div className="arrow-wrapper">
<i className="arrow fa-solid fa-arrow-right"></i>
</div>
           </div>
         </a>
          </div>
		
	</div>
	<div className="box-4 tall">
    <img src="src/assets/Main/Screenshot 2024-05-22 003306.png" alt="" />

	<div className="dark-layer3">
          </div>
          <div className="box-detail" style={{width:"200px", height:"200px", flexDirection:"column"}}>
           <div className="box-detail-r">
         <span style={{width:"20px"}} className='box-detail-r-heading'>Passward Generator</span><br />
        <ul style={{paddingLeft:"10px"}}> 
			<li>React.js</li>
			

		</ul>

           </div>
           <a href="https://passward-generator-three.vercel.app/" target='blank'>
           <div className="box-detail-l">
<div className="arrow-wrapper">
<i className="arrow fa-solid fa-arrow-right"></i>
</div>
           </div>
           </a>
          </div>
	</div>
	
</div>
		 
        </div>

    </div>

      
    </div>
  )
}

export default Main
