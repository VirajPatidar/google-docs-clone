import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/dist/client/router';
import { db } from '../../firebase';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';
import { getSession, signOut, useSession } from 'next-auth/client';
import Login from '../../components/Login';
import TextEditor from '../../components/TextEditor';

const Doc = () => {

    const [session] = useSession();

    if (!session)
        return <Login />


    const router = useRouter();
    const { id } = router.query;

    const [snapshot, loadingSnapshot] = useDocumentOnce(
        db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
    );

    if (!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace('/');
    }

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                    <Icon name="description" size="5xl" color="blue" />
                </span>
                <div className="flex-grow px-2">
                    <h2>{snapshot?.data()?.fileName}</h2>
                    <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-500">
                        <p className="option">File</p>
                        <p className="option">Edit</p>
                        <p className="option">View</p>
                        <p className="option">Insert</p>
                        <p className="option">Format</p>
                        <p className="option">Tools</p>
                    </div>
                </div>

                <div className="idRight hidden md:inline-flex items-center">
                    <Button
                        color="lightBlue"
                        buttonType="filled"
                        size="regular"
                        className="hidden md:inline-flex h-10"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        rillple="light"
                    >
                        <Icon name="people" size="md"/> SHARE
                    </Button>
                    <img 
                        onClick={signOut}
                        className="cursor-pointer rounded-full h-10 w-10 ml-2" 
                        src={session?.user.image}
                        alt="" 
                    />
                </div>
            </header>

            <TextEditor />

        </div>
    );
}

export default Doc;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    return {
        props: {
            session,
        },
    };
}