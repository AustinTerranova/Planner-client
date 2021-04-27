import React from "react"
import Modal from '@material-ui/core/Modal'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Draggable from 'react-draggable';



function PaperComponent(props) {
    return (
      <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} />
      </Draggable>
    );
  }

export class ToDo extends React.Component{
    constructor(props){
        super(props)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
        
    }
    
    handleOpen(e) {
        
        this.props.handleClickOpen(true)
          
        e.preventDefault()
    }
    handleClose(e){
        this.props.handleClickOpen(false)
        e.preventDefault()
    }
    handleChange(e){
        alert(e.target.value)
        e.preventDefault()
    }

    render(){
        return( 
            <div class="wrapper fadeInDown">
                <div id='formContent'>
                    <input type="text" name="My List" value="my list"/>

                    <ul>
                        <li>go to the gym</li>
                    </ul>
                
                        <Dialog 
                            open={this.props.open}
                            PaperComponent={PaperComponent}
                            aria-labelledby="draggable-dialog-title"
                        >           
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Create Entry
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            
                           
                        </DialogContentText>
                        <TextField
                            onChange={this.handleChange}
                            
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Title"
                            type="Content"
                            fullWidth
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="content"
                            type="Content"
                            fullWidth
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Add
                        </Button>
                        </DialogActions>
                    </Dialog>
                    <input onClick={this.handleOpen} type='submit' value="add" name="+"/>
                </div>
            </div> 
        )
    }
}