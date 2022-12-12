import React from 'react'
import { Grid, Typography } from '@mui/material'
import { lang } from '../localization/index'
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import ZoomOutMap from '@mui/icons-material/ZoomOutMap';


export default function Portfolio({ title, subtitle, href, image }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        boxShadow: 24,
    };
    return (
        <>
            <Grid item lg={4} className="p-4 flex flex-col w-full mb-4">
                <div className='relative group'>
                    <img className='w-full cursor-pointer transition-all delay-50 ease-in group-hover:opacity-20 group-hover:outline outline-offset-4 outline-2 ' src={image} alt="ReactDeveloper" />
                    <div className='opacity-0 transition-all delay-50 ease-in absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100'>
                        <div className='bg-gray-400 text-white text-base px-2 py-2 rounded-full'>
                            <ZoomOutMap className='text-3xl cursor-pointer' onClick={handleOpen} />
                        </div>
                    </div>
                </div>
                <Typography className={lang === 'fa' ? 'text-right pt-2 cursor-pointer' : 'text-left pt-2 cursor-pointer'} variant='h5'><a target="_blank" className='text-white transition ease-in delay-50 hover:text-primaryColor' href={href}>{title}</a></Typography>
                <Typography variant='body1'>{subtitle}</Typography>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className="w-full sm:w-1/2">
                        <img className='w-full' src={image} alt="ReactDeveloper" />
                    </Box>
                </Fade>
            </Modal>
        </>

    )
}
