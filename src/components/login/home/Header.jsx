import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <header>
        <div className='home-header-container'>
            <div>
                <h1 className='header-logo-text'>TodoX</h1>
            </div>
            <div>
                <button className='new-task-btn'><span><AddIcon fontSize='large'/></span>{" "}New</button>
            </div>
        </div>
    </header>
)
}

export default Header