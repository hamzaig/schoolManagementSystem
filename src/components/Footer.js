import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import React from 'react'

const Footer = () => {
    return (
        <footer>
        <hr />
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 10 }}
                bgcolor="primary" color="black">
                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid xs={12} sm={4}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Support
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Privacy Policies
                                </Link>
                            </Box>
                            {/* 2nd */}
                            <Box borderBottom={1}>Account</Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Register
                                </Link>
                            </Box>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Backup
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href='/' color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}}>
                    School Management System &reg: {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer 
