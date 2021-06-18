import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    card : {
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        // height : '100%',
        borderRadius : '15px',
        // position :'relative',
        marginTop : '3rem',
    },
    title: {
        padding: '10px 13px 0 13px',
        color: '#313d2f'
    },
    author: {
        padding: '0 18px',
        fontSize: 'small',
        letterSpacing: '1.8px'
    },
    time : {
        padding : '5px 18px'
    },
    actions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    }
}))