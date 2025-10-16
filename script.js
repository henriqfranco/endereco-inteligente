// Aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos do formulário
    const form = document.getElementById('formEndereco');
    const cepInput = document.getElementById('cep');
    const logradouroInput = document.getElementById('logradouro');
    const numeroInput = document.getElementById('numero');
    const ufInput = document.getElementById('uf');
    const complementoInput = document.getElementById('complemento');

    // ============================================
    // FORMATAÇÃO AUTOMÁTICA DO CEP
    // ============================================
    cepInput.addEventListener('input', function(e) {
        let valor = e.target.value;
        
        // Remove tudo que não é número
        valor = valor.replace(/\D/g, '');
        
        // Aplica a máscara usando regex com grupos de captura
        // Formato: 00000-000
        if (valor.length > 5) {
            valor = valor.replace(/^(\d{5})(\d)/, '$1-$2');
        }
        
        e.target.value = valor;
    });

    // ============================================
    // CONVERSÃO AUTOMÁTICA UF PARA MAIÚSCULO
    // ============================================
    ufInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.toUpperCase();
    });

    // ============================================
    // PERMITIR APENAS NÚMEROS NO CAMPO NÚMERO
    // ============================================
    numeroInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    // ============================================
    // VALIDAÇÃO E ENVIO DO FORMULÁRIO
    // ============================================
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio padrão do formulário
        
        // Obter valores dos campos
        const cep = cepInput.value.trim();
        const logradouro = logradouroInput.value.trim();
        const numero = numeroInput.value.trim();
        const uf = ufInput.value.trim();
        const complemento = complementoInput.value.trim();

        // ============================================
        // VALIDAÇÃO DO CEP
        // ============================================
        // Regex com grupos de captura para validar formato 00000-000
        const regexCep = /^(\d{5})-(\d{3})$/;
        
        if (!cep) {
            alert('❌ Erro: O campo CEP é obrigatório!');
            cepInput.focus();
            return;
        }
        
        if (!regexCep.test(cep)) {
            alert('❌ Erro: CEP inválido! Use o formato 00000-000');
            cepInput.focus();
            return;
        }

        // ============================================
        // VALIDAÇÃO DO LOGRADOURO
        // ============================================
        if (!logradouro) {
            alert('❌ Erro: O campo Logradouro é obrigatório!');
            logradouroInput.focus();
            return;
        }
        
        if (logradouro.length < 5) {
            alert('❌ Erro: O Logradouro deve conter no mínimo 5 caracteres!');
            logradouroInput.focus();
            return;
        }

        // ============================================
        // VALIDAÇÃO DO NÚMERO
        // ============================================
        if (!numero) {
            alert('❌ Erro: O campo Número é obrigatório!');
            numeroInput.focus();
            return;
        }
        
        const regexNumero = /^\d+$/;
        if (!regexNumero.test(numero)) {
            alert('❌ Erro: O campo Número deve conter apenas dígitos numéricos!');
            numeroInput.focus();
            return;
        }

        // ============================================
        // VALIDAÇÃO DA UF
        // ============================================
        if (!uf) {
            alert('❌ Erro: O campo UF é obrigatório!');
            ufInput.focus();
            return;
        }
        
        // Regex para validar exatamente 2 letras maiúsculas
        const regexUf = /^[A-Z]{2}$/;
        if (!regexUf.test(uf)) {
            alert('❌ Erro: UF inválida! Digite exatamente 2 letras maiúsculas (ex: SP, RJ, MG)');
            ufInput.focus();
            return;
        }

        // ============================================
        // TODAS AS VALIDAÇÕES PASSARAM
        // ============================================
        alert('✅ Endereço cadastrado com sucesso!');
        
        // Opcional: Limpar o formulário após sucesso
        form.reset();
        
        // Opcional: Exibir os dados cadastrados no console
        console.log('=== Endereço Cadastrado ===');
        console.log('CEP:', cep);
        console.log('Logradouro:', logradouro);
        console.log('Número:', numero);
        console.log('UF:', uf);
        console.log('Complemento:', complemento || '(não informado)');
        console.log('===========================');
    });
});
