import {  ButtonGroup, Grid, Typography } from '@mui/material';
import { Image } from 'gestalt';
import CheckIcon from '@mui/icons-material/Check';
import React, { useEffect, useState } from 'react';
import PhotoWidgetCropper from './PhotoWidgetCropper';
import PhotoWidgetDropzone from './PhotoWidgetDropzone';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mantine/core';


interface Props {
    loading: boolean;
    uploadPhoto: (file: Blob) => void;
}

export default function PhotoUploadWidget({loading,uploadPhoto} : Props) {
    const [files, setFiles] = useState<any>([]);
    const [cropper, setCropper] = useState<Cropper>();

    function onCrop() {
        if(cropper) {
            cropper.getCroppedCanvas().toBlob(blob => uploadPhoto(blob!));
        }
    }

    useEffect(() => {
        return () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview))
        }
    } , [files])

    return (
        
        <Grid sx={{alignItems:'center',justifyContent:'center'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            

            <Grid item xs={4} sm={2} md={3} >
            <Typography sx={{color:'teal'}}>Step 1- Add Photo</Typography>
            <PhotoWidgetDropzone setFiles={setFiles} />
            </Grid>
            <Grid item xs={1} sm={4} md={4}>
                <Typography sx={{color:'teal'}}>Step 2- Resize image</Typography>
                {files && files.length > 0 && (
                    <PhotoWidgetCropper setCropper={setCropper} imagePreview={files[0].preview} />

                )}
            </Grid>
      
            <Grid item xs={2} sm={4} md={4}>
                <Typography sx={{color:'teal'}}>Step 3- Preview & Upload</Typography>
                {files && files.length > 0 &&  
                <>
                <div className="img-preview" style={{minHeight:200, overflow:'hidden'}} />

                <ButtonGroup sx={{width:200}} variant="contained" aria-label="outlined primary button group">
                    <Button loading={loading} sx={{width:200}} onClick={onCrop} ><CheckIcon /></Button>
                    <Button disabled={loading} sx={{width:200}} onClick={() => setFiles([])}><CloseIcon /></Button>

                </ButtonGroup>
                
                </>}
                
            </Grid>
        </Grid>
    )
}