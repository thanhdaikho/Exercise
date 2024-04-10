import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';

const Lab8Ex1 = () => {
    const [provinces, setProvinces] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const token = "fbab190f-f62f-11ee-a6e6-e60958111f48"; // Replace with your valid token

    useEffect(() => {
        const callProvinceAPI = async () => {
            try {
                const apiUrl = "https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province";
                const response = await axios.get(apiUrl, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Token': token
                    }
                });
                const provinceData = response.data;
                const transformedProvinces = provinceData.data.map((province) => ({
                    label: province.ProvinceName,
                    value: province.ProvinceID.toString()
                }));
                setProvinces(transformedProvinces);
            } catch (error) {
                console.error('Error fetching provinces:', error);
                // Handle error appropriately, e.g., display a message to the user
            }
        };

        callProvinceAPI();

    }, []);

    const fetchDistricts = async (provinceId) => {
        try {
            const apiUrl = `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${provinceId}`;
            const response = await axios.get(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Token': token
                }
            });
            const districtData = response.data;
            const transformedDistricts = districtData.data.map((district) => ({
                label: district.DistrictName,
                value: district.DistrictID.toString()
            }));
            setDistricts(transformedDistricts);
        } catch (error) {
            console.error('Error fetching districts:', error);
            // Handle error appropriately
        }
    };

    const fetchWardsByDistrictId = async (districtId) => {
        try {
            const apiUrl = `https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${districtId}`;
            const response = await axios.get(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Token': token
                }
            });
            const wardData = response.data;
            const transformedWards = wardData.data.map((ward) => ({
                label: ward.WardName,
                value: ward.WardCode.toString() // Ensure to use the correct field for value
            }));
            setWards(transformedWards);
        } catch (error) {
            console.error('Error fetching wards:', error);
            // Handle error appropriately
        }
    };

    const handleProvinceChange = (item) => {
        setSelectedProvince(item);
        if (item) {
            fetchDistricts(item.value);
        } else {
            setDistricts([]); // Clear districts when no province is selected
        }
    };

    const handleDistrictChange = (item) => {
        if (item) {
            fetchWardsByDistrictId(item.value);
        } else {
            setWards([]); // Clear wards when no district is selected
        }
    };

    return (
        <View>
            <Dropdown
                data={provinces}
                labelField="label"
                valueField="value"
                placeholder='Chọn tỉnh/thành phố'
                style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, marginEnd: 15, borderColor: 'gray', height: 50, margin: 15 }}
                onChange={handleProvinceChange}
            />

            {districts.length > 0 && (
                <View style={{ marginTop: 20 }}>
                    <Dropdown
                        data={districts}
                        labelField="label"
                        valueField="value"
                        placeholder='Chọn quận/huyện'
                        style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, marginEnd: 15, borderColor: 'gray', height: 50, margin: 15 }}
                        onChange={handleDistrictChange}
                    />
                </View>
            )}

            {wards.length > 0 && (
                <View style={{ marginTop: 20 }}>
                    <Dropdown
                        data={wards}
                        labelField="label"
                        valueField="value"
                        placeholder='Chọn xã/phường'
                        style={{ width: '90%', borderWidth: 1, padding: 10, borderRadius: 12, marginEnd: 15, borderColor: 'gray', height: 50, margin: 15 }}
                        onChange={(item) => console.log('Selected ward:', item)}
                    />
                </View>
            )}
        </View>
    );
};

export default Lab8Ex1;
