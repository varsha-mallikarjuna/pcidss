"use client"

import { useState } from 'react';
import { a, b, c, p2pe } from '../../../data/questions';
import QuestionTable from '@/user-components/QuestionsTable'

export default function Questionnaire({ params }: { params: { type: string } }) {

    const [AChecked, setAChecked] = useState(Array(a.length).fill(false))
    const [BChecked, setBChecked] = useState(Array(a.length).fill(false))
    const [CChecked, setCChecked] = useState(Array(a.length).fill(false))
    const [P2PEChecked, setP2PEChecked] = useState(Array(a.length).fill(false))

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12 w-100">
            <div>
                {params.type === 'a' && <QuestionTable name="SAQ A" questions={a} checkList={AChecked} checkerList={setAChecked}/>}
                {params.type === 'b' && <QuestionTable name="SAQ B" questions={b} checkList={BChecked} checkerList={setBChecked}/>}
                {params.type === 'c' && <QuestionTable name="SAQ C" questions={c} checkList={CChecked} checkerList={setCChecked}/>}
                {params.type === 'p2pe' && <QuestionTable name="P2PE" questions={p2pe} checkList={P2PEChecked} checkerList={setP2PEChecked}/>}
            </div>
        </main>
    )
}