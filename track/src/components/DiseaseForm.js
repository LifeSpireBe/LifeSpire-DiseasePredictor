import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from './Spacer';

const DiseaseForm = ({  onSubmit }) => {

    const [Symptom1, setSymp1] = useState('');
    const [Symptom2, setSymp2] = useState('');
    const [Symptom3, setSymp3] = useState('');
    const [Symptom4, setSymp4] = useState('');
    const [Symptom5, setSymp5] = useState('');

  return (
    <ScrollView>
    <Spacer>
        <Input
            label="Enter Symptom 1"
            value={Symptom1}
            onChangeText={setSymp1}
            autoCapitalize="none"
            autoCorrect={false}
        />
        </Spacer>

        <Spacer>
        <Input
            label="Enter Symptom 2"
            value={Symptom2}
            onChangeText={setSymp2}
            autoCapitalize="none"
            autoCorrect={false}
        />
        </Spacer>

        <Spacer>
        <Input
            label="Enter Symptom 3"
            value={Symptom3}
            onChangeText={setSymp3}
            autoCapitalize="none"
            autoCorrect={false}
        />
        </Spacer>

        <Spacer>
        <Input
            label="Enter Symptom 4"
            value={Symptom4}
            onChangeText={setSymp4}
            autoCapitalize="none"
            autoCorrect={false}
        />
        </Spacer>

        <Spacer>
        <Input
            label="Enter Symptom 5"
            value={Symptom5}
            onChangeText={setSymp5}
            autoCapitalize="none"
            autoCorrect={false}
        />
        </Spacer>

        <Spacer>
        <Button
          title="Submit"
          onPress={() => onSubmit({ Symptom1, Symptom2, Symptom3, Symptom4, Symptom5 })
        }
        />
      </Spacer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default DiseaseForm;
