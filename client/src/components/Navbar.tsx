import { Text, Flex, HStack, Button, Image, Link
} from '@chakra-ui/react'
import { FC } from 'react'
import { CgProfile, CgLogOut } from 'react-icons/cg'
import { AiTwotoneShop } from 'react-icons/ai'
import { MdOutlineChat } from 'react-icons/md'
import { useAuth } from '@/hooks/useAuth'

export interface NavbarProps {
    onProfileOpen?: () => void;
    onShopOpen?: () => void;
    onChatOpen?: () => void;
}

const Navbar: FC<NavbarProps> = ({ onProfileOpen, onShopOpen, onChatOpen }) => {
    const { Logout } = useAuth();

    return (
        <nav>
            <Flex w='full' p='1em' px='2em' justifyContent='space-between'>
                <Link href='/game' style={{ textDecoration: 'none' }}>
                    <HStack cursor='pointer'>
                        <Image src='./assets/images/logo.png' alt='emoji.io Logo' w='45px' />
                        <Text fontSize='14pt' textAlign='center'>
                            emoji.io
                        </Text>
                    </HStack>
                </Link>
                <HStack spacing='2em'>
                    <HStack>
                        <Button variant='primary' leftIcon={<CgProfile />} onClick={onProfileOpen}>
                            Profile
                        </Button>
                        <Button variant='primary' leftIcon={<AiTwotoneShop />} onClick={onShopOpen}>
                            Shop
                        </Button>
                        <Button variant='primary' leftIcon={<MdOutlineChat />} onClick={onChatOpen}>
                            Chat
                        </Button>
                    </HStack>
                    <Button variant='danger' leftIcon={<CgLogOut />} onClick={Logout}>
                        Logout
                    </Button>
                </HStack>
            </Flex>
        </nav>
    )
}

export default Navbar