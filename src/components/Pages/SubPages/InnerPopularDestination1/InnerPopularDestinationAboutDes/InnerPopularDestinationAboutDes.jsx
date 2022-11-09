import React from 'react'
import  "./InnerPopularDestinationAboutDes.css";
import Populardestination_price from './Populardestination_price';

const InnerPopularDestinationAboutDes = () => {
  return (
    <div style={{
        display:"flex"
    }}>
    <div>
    
    <h1 className='innerpopularAbout'>About Destination</h1>
    
    <div className='text'>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software .</p>
    </div>


<div className='imglogo'>
<div className="logoimg"><img src='https://image.shutterstock.com/image-vector/vector-logo-city-260nw-528549922.jpg' alt='logoImage' /></div>
<div className="logotxt">Day 1</div>
<div className='logodiscr'>Lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>

</div>

<div className='imglogo'>
<div className="logoimg"><img src='https://image.shutterstock.com/image-vector/vector-logo-city-260nw-528549922.jpg' alt='logoImage' /></div>
<div className="logotxt">Day 2</div>
<div className='logodiscr'>Lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>

</div>


<div className='imglogo'>
<div className="logoimg"><img src='https://image.shutterstock.com/image-vector/vector-logo-city-260nw-528549922.jpg' alt='logoImage' /></div>
<div className="logotxt">Day 3</div>
<div className='logodiscr'>Lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>

</div>



<div className='imglogo'>
<div className="logoimg"><img src='https://image.shutterstock.com/image-vector/vector-logo-city-260nw-528549922.jpg' alt='logoImage' /></div>
<div className="logotxt">Day 4</div>
<div className='logodiscr'>Lorem Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>

</div>



</div>
<div>
<Populardestination_price />
</div>
    </div>
  )
}

export default InnerPopularDestinationAboutDes;