import styles from '@/components/community.modules.css';

const Community = () => {
  return (
    
<>
        <div className="cardouter bg-cublue pt-4 pb-4 mt-6 mb-6 p-6">
        <h1 className='pt-4 pb-4'>Your <span className="text-blue">hobby</span> , Your <span className="text-violet">Community...</span></h1>
        <div className='comflex'>
            <div>
        <button className="me-2 btn-custom1 ps-3 pe-3 pt-2 pb-2 mb-9 rounded text-customcolor">
                Get Started
              </button>
              </div>
              <div className='noncomflex'>
                <a href="#">
              <img src="Group 77.png" alt="" style={{height:'3.5rem',width:'3.5rem'}}/>
              </a>
              <button className="me-2 btn-custom2 ps-1 pe-1 pt-2 pb-2 rounded text-customcolor">
                Go to top(CTRL+Home)
              </button>
              </div>
              </div>
              <div>
<img src="Group 99.png" alt="" className='commimg' />
</div>
</div>
</>

  )
}

export default Community
