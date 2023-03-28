import { Stack } from "expo-router"

const SettingsLayout = ()=>{
return <>
<Stack>
    <Stack.Screen name="index" options={
        {
            title:"settings"
        }
    } />
</Stack>
</>
}

export default SettingsLayout