#ifdef GL_ES
/* 内存精度 */
precision mediump float;
#endif
/* 归一化坐标 */
uniform vec2 u_resolution;

float rectShape(vec2 pos, float scale)
{
    vec2 rect = vec2(1,1);
    //rect= vec2(step(scale, pos.x), step(scale, pos.y));
    //rect *= vec2(step(scale,1.-pos.x),step(scale,1.-pos.y));
    //rect.x=smoothstep(0.,1.,0.5);
    rect=vec2(smoothstep(0.,scale,pos.x),smoothstep(0.,scale,pos.y));
    rect*=vec2(smoothstep(0.,scale,1.0-pos.x),smoothstep(0.,scale,1.-pos.y));
    return rect.x*rect.y;
}

void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution;
    //vec3 color=vec3(rectShape(st,0.1));
    vec3 color=vec3(1.-rectShape(st,0.1));
    /* 输出颜色 */
    gl_FragColor = vec4(color, 1.0);

}
