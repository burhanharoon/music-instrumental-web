import React, { useState, useEffect } from 'react'

import { Box, Button, Heading, Select, Stack } from '@chakra-ui/react'
import Card from '../components/Card'
import { Text } from '@chakra-ui/react'



export default function Categories() {

    const [searchResults, setSearchResults] = useState();
    const changeOpotion = e => {
        if (e.target.value === 'Select option') {
            setSearchResults(Categories[0].label)

        } else {
            setSearchResults(e.target.value)
        }
    }

    const Categories = [
        {
            label: "All Instruments",
            value: 'all',
            items: [
                {
                    name: 'Item 1',
                    price: 500,
                    image: 'acousticGuitar_512x512.jpg',
                },
                {
                    name: 'Item 2',
                    price: 600,
                    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    name: 'Item 3',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                }, {
                    name: 'Item 4',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                }, {
                    name: 'Item 5',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                }, {
                    name: 'Item 6',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                }, {
                    name: 'Item 7',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                },
                {
                    name: 'Item 8',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                },
                {
                    name: 'Item 9',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                },
                {
                    name: 'Item 10',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                },
                {
                    name: 'Item 11',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                },
                {
                    name: 'Item 12',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                }
            ]
        },
        {
            label: "Brass Instruments",
            value: 'brass',
            items: [
                {
                    name: 'Item 1',
                    price: 500,
                    image: '../public/images/acousticGuitar_512x512.jpg',
                },
                {
                    name: 'Item 2',
                    price: 600,
                    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    name: 'Item 3',
                    price: 700,
                    image: 'https://media.istockphoto.com/photos/close-up-on-classic-guitar-bridge-focus-on-foreground-picture-id1300197680?b=1&k=20&m=1300197680&s=170667a&w=0&h=wiQZS6TE80V1_Ew6XIarhDsIe2JAoiTv0Hq9slLPVwk=',
                }
            ]
            // subLabel: "Trumpet and Trombone",/
        },
        {
            label: "Woodwind Instruments",
            // subLabel: "Flute and Saxophone ",
            value: 'woodwind',
            items: [
                {
                    name: 'Item 1',
                    price: 500,
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDP6OYuwQ4zlJAce963kXyudQIbpLDFxz8ug&usqp=CAU',
                },
                {
                    name: 'Item 2',
                    price: 600,
                    image: 'https://cdn.britannica.com/w:400,h:300,c:crop/21/176321-050-AC4BB7EF/Guitar-inlays-Venice.jpg',
                },
                {
                    name: 'Item 3',
                    price: 700,
                    image: '',
                }
            ]

        },
        {
            label: "Guitars",
            // subLabel: "Electric and Acoustic ",
            value: 'guitars',
            items: [
                {
                    name: 'Item 1',
                    price: 500,
                    image: 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    name: 'Item 2',
                    price: 600,
                    image: 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    name: 'Item 3',
                    price: 700,
                    image: 'https://images.unsplash.com/photo-1561777848-6a56e08d6a26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGd1aXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                }
            ]

        },
        {
            label: "Percussion",
            // subLabel: "Drums",
            value: 'precussion',
            items: [
                {
                    name: 'Item 1',
                    price: 500,
                    image: 'https://images.unsplash.com/photo-1556449895-a33c9dba33dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
                {
                    name: 'Item 2',
                    price: 600,
                    image: 'https://images.unsplash.com/photo-1514649923863-ceaf75b7ec00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60   ',
                },
                {
                    name: 'Item 3',
                    price: 700,
                    image: 'https://images.unsplash.com/photo-1605020420620-20c943cc4669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3VpdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                }
            ]

        },
    ]

    useEffect(() => {
        setSearchResults(Categories[0].label);
    }, [])

    // console.log('searchResults', searchResults)

    return (
        <div id="Categories">
            <Box className='leftComponent' display={['none', 'none', "block"]} >

                <Stack spacing={6}>
                    <Heading
                        letterSpacing={2}
                        size='xl'
                        align={'left'}
                        mb={4}
                        fontWeight="bold"
                        fontSize='2xl'>Categories</Heading>
                </Stack>



                <Stack>
                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        border="2px"
                        borderColor="cyan.500"
                        direction={{
                            base: 'column-reverse',
                            md: 'row',
                        }}
                        onClick={e => { setSearchResults('All Instruments') }}>All  Instruments</Button>

                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        border="2px"
                        borderColor="cyan.500"
                        direction={{
                            base: 'column-reverse',
                            md: 'row',
                        }}
                        onClick={e => { setSearchResults('Woodwind Instruments') }}>Woodwind Instruments</Button>

                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        border="2px"
                        borderColor="cyan.500"
                        direction={{
                            base: 'column-reverse',
                            md: 'row',
                        }}
                        onClick={e => { setSearchResults('Brass Instruments') }}>Brass Instruments</Button>

                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        border="2px"
                        borderColor="cyan.500"
                        direction={{
                            base: 'column-reverse',
                            md: 'row',
                        }}
                        onClick={e => { setSearchResults('Percussion') }}>Percussion</Button>

                    <Button
                        size="md"
                        height="48px"
                        width="200px"
                        border="2px"
                        borderColor="cyan.500"
                        direction={{
                            base: 'column-reverse',
                            md: 'row',
                        }}
                        onClick={e => { setSearchResults('Guitars') }}>Guitars</Button>
                </Stack>
            </Box>

            <Box w="100%">
                <div>
                    <Text fontWeight={800} letterSpacing={8} align={'center'} fontSize={["2xl", "3xl", '5xl']}>PLAY IT AGAIN TUNES</Text>
                </div>
                <div>
                    <Text letterSpacing={2} align={'center'} fontSize={['xl', '2xl']}>Musical Instrumental Rentals</Text>
                </div>
                <Box display={['none', 'block']} style={{ marginTop: 16 }} >
                    <Text letterSpacing={1} fontWeight={600} align={'center'} fontSize='xl'>{searchResults}</Text>
                </Box>
                <Box className='d-flex flex-wrap justify-content-center'>
                    <Select mt={8} maxW="27rem" size="lg" onChange={changeOpotion} display={{ base: "block", md: 'none' }}>
                        <option value='All Instruments'>All Instruments</option>
                        <option value='Woodwind Instruments'>Woodwind Instruments</option>
                        <option value='Brass Instruments' >Brass Instruments</option>
                        <option value='Percussion' >Percussion</option>
                        <option value='Guitars'>Guitars</option>
                    </Select>
                </Box>
                <Box display={['block', 'none']} style={{ marginTop: 16 }} >
                    <Text letterSpacing={1} fontWeight={600} align={'center'} fontSize='xl'>{searchResults}</Text>
                </Box>
                <div className='d-flex flex-wrap justify-content-center' style={{ marginTop: 32 }}>
                    {Categories.map((category, idx) =>
                        searchResults && category.label === searchResults && category.items.map((item) =>
                            <div className='singleCard' key={idx}>
                                {/* {console.log('categories ', category)}
                                {console.log('search ', searchResults)} */}
                                <Card name={item.name} price={item.price} image={item.image} />
                            </div>
                        )
                    )}
                </div>
            </Box>
        </div >
    )
}


