import { AX } from '../axios';

export async function suggestPackage(formData) {
    return AX.post('/suggest_package', formData)
        .then((response) => {
            const resCode = response.data.response_code;
            console.log(response.data);
            if (resCode == "200") { // success
                return {
                    success: true,
                    data: response.data
                }
            }
            else {
                return {
                    success: false,
                    error: response.data.error
                }
            }
        })
        .catch((error) => {
            return {
                success: false,
                error: error.toString()
            }
        });
}