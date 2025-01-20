import React from 'react';
import Card from '../../common/Card';
import { motion } from 'framer-motion';
const TV = ({ data }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4 } }}>
            <div className='text-white bg-black pt-[150px] no-scrollbar overflow-hidden h-screen'>
                <h1 className='text-white mb-4 absolute left-20 top-20 text-2xl'>Movies</h1>
                <div className='pl-[86px] grid grid-cols-5 gap-5'>
                    {data.map((item) => <Card item={item} />)}
                </div>
            </div>
        </motion.div >
    );
};

export default TV;