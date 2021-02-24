import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { sum } from '../../store/TodoList/TodoList.actions'

function Calculator() {

    const dispatch = useDispatch();
    const result = useSelector(state => state.calculator);
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    return (
        <>
            <View>
                <TextInput
                    keyboardType='numeric'
                    placeholder="a"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    
                ></TextInput>

                <TextInput
                    keyboardType='numeric'
                    placeholder="b"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                ></TextInput>

                <TouchableOpacity onPress={() => {
                    dispatch(sum(a, b))
                }}>
                    <Text>Somar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Subtrair</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>
                    {Number(result)}
                </Text>
            </View>
        </>
    );
}


export default Calculator;