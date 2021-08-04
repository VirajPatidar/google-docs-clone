import Button from "@material-tailwind/react/Button";
import Image from 'next/image';
import { signIn } from "next-auth/client";
import logo from '../public/logo.png'
import { useRouter } from 'next/dist/client/router';

const Login = () => {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image
                src={logo}
                height="300"
                width="550"
                objectFit="contain"
            />
            <Button
                className="w-44 mt-10"
                color="blue"
                buttonType="filled"
                ripple="light"
                onClick={signIn}
            >
                Login
            </Button>
            <Button
                className="w-54 mt-3"
                color="teal"
                buttonType="filled"
                ripple="light"
                onClick={() => router.push(`/about`)}
            >
                About this Project
            </Button>
        </div>
    );
}

export default Login;