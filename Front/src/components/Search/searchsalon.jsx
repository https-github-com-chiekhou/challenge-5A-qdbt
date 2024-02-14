import React, { useState } from 'react';
import axios from 'axios';
import {
    Button,
    Img,
    Input,
  } from "../../components";

const SearchSalon = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
        const response = await axios.get(`http://localhost:8888/api/resources?search=${query}`);
        setResults(response.data);
        } catch (error) {
        console.error('Error searching:', error);
        }
    };
    return (
    <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
        <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col h-[60px] md:h-auto justify-start px-4 py-3.5 rounded-[10px] w-full">
        <Input
            name="frame1000001565"
            placeholder="Entrez la prestation ou le prestataire"
            className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-lg w-full"
            wrapClassName="flex w-auto sm:w-full"
            value={query}
            onChange={(e) => setQuery(e ? e : '')}
            suffix={
            <Img
                className="mt-auto mb-0.5 h-6 ml-3"
                src="./src/assets/images/img_search_gray_700.svg"
                alt="search"
            />
            }
        ></Input>
        </div>
        
        
        <Button
        className="cursor-pointer flex items-center justify-center min-w-[124px]"
        rightIcon={
            <Img
            className="h-5 mt-px mb-[3px] ml-2.5"
            src="./src/assets/images/img_search_gray_700.svg"
            alt="search"
            />
        }
        shape="round"
        color="gray_900"
        size="md"
        variant="fill"
        >
        <div className="font-bold text-left text-lg">Search</div>
        </Button>
    </div>
    )
}

export default SearchSalon;