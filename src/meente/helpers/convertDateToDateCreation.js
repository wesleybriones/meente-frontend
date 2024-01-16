import { parseISO } from 'date-fns'

export const convertDateToDateCreation = ( clients = [] ) => {
    return clients.map( client => {
        if ( client.update_date !== null ){
            client.update_date = parseISO( client.update_date );
        }
        client.create_date = parseISO( client.create_date );

        return client;
    });
}

export const convertDataToDateInputDevice = ( devices = [] ) => {
    return devices.map( device => {
        if ( device.input_day !== null && device.output_day !== null ){
            device.input_day = parseISO( device.input_day );
            device.input_day = device.input_day.toString().split(' GMT')[0];
            device.output_day = parseISO( device.output_day );
            device.output_day = device.output_day.toString().split(' GMT')[0]
        }
        return device;
    });
}

