import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer psPGLbCPSR1BizPzK2G4hutUy31Ay2Mhcdx6vGm8_h7VhJarCQspAPrXFIiFj5EgZlVhx3KmI3y_fy131csHa9mt3ZBpfI3L8KS6v3Pg-56elbCsB3xMFCj6XH5QXXYx'
    }
});