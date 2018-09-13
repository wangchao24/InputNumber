<template>
    <div class='test'>
        <input type="number" @input="inputHandle" :value='value' :maxlength="maxlength">
        <span>{{mes}}</span>
    </div>
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        maxlength: '',//最大长度
        value: '',
        point: '',
        min:"",
        max:'',
    },
    data() {
        return {
            mes: ''
        }
    },
    mounted() {

    },
    methods: {
        inputHandle(e) {
            event.target.value = Number(event.target.value);
            event.target.value = (event.target.value).replace(/^(\-)*(\d+)(\.\d{3}\.*)$/, '$2')
            this.$emit('input')
        }
    }
}
</script>
