import { Button, TextField, Link, Grid, Box, Container } from '@mui/material/';
import { useFormik, Form, FormikProvider } from 'formik';
import { useRouter } from 'next/router'
import * as React from 'react';
import * as Yup from 'yup';
import axios from 'axios';

export default function SignIn() {

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required('username is required'),
            password: Yup.string().required('password is required'),
        }),
        onSubmit: (values) => {
            axios.post('http://localhost:5000/user/login', values).then((response) => {
                console.log(response);
                if (response.data !== 'username not exist' && response.data !== 'invalid password' && (response.status == '200' || response.status == '201')) router.push('/home')
            })
                .catch((err) => {
                    console.log(err);
                });
        },
    });

    const { errors, touched, values, handleBlur, handleSubmit } = formik;

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                    <Container component="main" maxWidth="xs">

                        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>


                            <TextField
                                margin="normal"
                                id="username"
                                name="username"
                                fullWidth
                                label='username'
                                value={values.username}
                                onBlur={handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(touched.username && errors.username)}
                                helperText={touched.username && errors.username}
                            />


                            <TextField
                                margin="normal"
                                id="password"
                                name="password"
                                fullWidth
                                label='password'
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={formik.handleChange}
                                error={Boolean(touched.password && errors.password)}
                                helperText={touched.password && errors.password}
                            />

                            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Log In</Button>

                        </Box>
                    </Container>
                </Form>
            </FormikProvider>
            <Grid item>
                <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
        </Box>
    );
}
