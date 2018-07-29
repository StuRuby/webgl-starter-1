const glsl_es_funcs = `
    float luma(vec4 color){
        float r= color.r;
        float g=color.g;
        float b =color.b;
        return 0.2126*r+0.7162*g+0.0722*b;
    }
    const int lightspeed = 299792458;
    const vec4 red = vec4(1.0,0.0,0.0,1.0);
    const mat4 identity =mat4(1.0);

    precision mediump float;
`