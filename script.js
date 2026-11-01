const input = document.querySelector(".input");
const output = document.querySelector(".output");
const commands = [
    "<p>> <span class='green'>help</span> - <span class='gray'>показать список команд</span></p>",
    "<p>> <span class='green'>ls</span> - <span class='gray'>список доступных глав</span></p>",
    "<p>> <span class='green'>flip</span> - <span class='gray'>подбрасывает виртуальную монетку</span></p>",
    "<p>> <span class='green'>coffee</span> - <span class='gray'>выпить кофе</span></p>",
    "<p>> <span class='green'>about</span> - <span class='gray'>о проекте</span></p>",
    "<p>> <span class='green'>clear</span> - <span class='gray'>очистить терминал</span></p>",
];
const ls = [
    "<p>> <span class='green'>ch.1</span> - <span class='gray'>глава 1: unit-07</span></p>",
    "<p>> <span class='green'>ch.2</span> - <span class='gray'>глава 2: breathing</span></p>"
]

output.insertAdjacentHTML("beforeend", "<p>> <span class='green'>добро пожаловать, для навигации используйте команду help</p>");
output.insertAdjacentHTML("beforeend", `
<pre>


   ▓▓▓  ▓   ▓ ▓▓▓▓    
  ▓     ▓▓ ▓▓ ▓   ▓ 
  ▓     ▓ ▓ ▓ ▓   ▓   
  ▓     ▓   ▓ ▓   ▓    
   ▓▓▓  ▓   ▓ ▓▓▓▓  

[ разработка проекта: ]
    ▰═════════ 2%

</pre>
`);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = input.value.toLowerCase();

        if (command === "help") {
            output.insertAdjacentHTML("beforeend", "<p>[ доступные команды: ]</p>");
            for (const commandName of commands) {
            output.insertAdjacentHTML("beforeend", "<p>" + commandName + "</p>");
            output.scrollTop = output.scrollHeight;
        }
        }

        else if (command === "ls") {
            output.insertAdjacentHTML("beforeend", "<p>[ доступные главы: ] <span class='orange'>(!) в данный момент главы еще не готовы, но в ожидании них вы можете выпить кофе при помощи команды coffee</span></p>");
            for (const commandName of ls) {
            output.insertAdjacentHTML("beforeend", "<p>" + commandName + "</p>");
            output.scrollTop = output.scrollHeight;
        }
        }

        else if (command === "flip") {
            if (Math.random() < 0.5) {
                output.insertAdjacentHTML("beforeend", "<p>> монетка показала орла</p>");
            }
            else {
                output.insertAdjacentHTML("beforeend", "<p>> монетка показала решку</p>");
            }
        }

        else if (command === "about") {
            output.insertAdjacentHTML("beforeend", "<p>[ о проекте: ]</p>");
            output.insertAdjacentHTML("beforeend", "<p>> я решил, что сделать отдельный сайт для своего рассказа/книги будет хорошей идеей и развяжет мне руки. можно будет добавлять какую-то ненавязчивую интерактивность, оформлять разные главы и даже разные сцены по-своему. а эта консолька будет менюшкой-оглавлением, что хорошо сыграет на погружении в сеттинг киберпанка, как я считаю.<br> </p>");
            output.scrollTop = output.scrollHeight;
        }

        else if (command === "clear") {
            output.innerHTML = "";
            output.insertAdjacentHTML("beforeend", "<p>> <span class='green'>добро пожаловать, для навигации используйте команду help</p>");
        }





        else if (command === "sv.cheats 1") {
            output.insertAdjacentHTML("beforeend", "<p>> <span class='red'>для чего тебе здесь читы? чего ты хочешь, псих?</span></p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }

        else if (command === "42") {
            output.insertAdjacentHTML("beforeend", "<p>> ответ на главный вопрос жизни, вселенной и всего такого</span></p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }

        else if (command === "coffee") {
            output.insertAdjacentHTML("beforeend", "<p>> <span class='red'>ошибка: кофемашина неисправна.</span></p><p>> для запуска диагностики выполните <span class='green'>diagnostics.run</span></p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "diagnostics.run") {
            output.insertAdjacentHTML("beforeend", `
                <p>> диагностика завершена. обнаружено 14 неисправностей.</p>
                <p>> теперь проверьте питание при помощи <span class='green'>power.check</span></p>
                <p>> <span class='orange'>шагов выполнено 1/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "power.check") {
            output.insertAdjacentHTML("beforeend", `
                <p>> питание проверено. напряжение нестабильно.</p>
                <p>> перезапустите контроллер при помощи <span class='green'>power.reset</span></p>
                <p>> <span class='orange'>шагов выполнено 2/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "power.reset") {
            output.insertAdjacentHTML("beforeend", `
                <p>> контроллер перезапущен. неисправности сохранены.</p>
                <p>> подключите водоснабжение при помощи <span class='green'>water.connect</span></p>
                <p>> <span class='orange'>шагов выполнено 3/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "water.connect") {
            output.insertAdjacentHTML("beforeend", `
                <p>> водоснабжение подключено.</p>
                <p>> наполните резервуар при помощи <span class='green'>water.fill_tank</span></p>
                <p>> <span class='orange'>шагов выполнено 4/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "water.fill_tank") {
            output.insertAdjacentHTML("beforeend", `
                <p>> резервуар наполнен.</p>
                <p>> откройте клапан подачи при помощи <span class='green'>water.valve.open</span></p>
                <p>> <span class='orange'>шагов выполнено 5/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "water.valve.open") {
            output.insertAdjacentHTML("beforeend", `
                <p>> клапан подачи открыт.</p>
                <p>> восстановите помпу при помощи <span class='green'>pump.repair</span></p>
                <p>> <span class='orange'>шагов выполнено 6/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "pump.repair") {
            output.insertAdjacentHTML("beforeend", `
                <p>> помпа восстановлена.</p>
                <p>> проверьте работоспособность помпы при помощи <span class='green'>pump.test</span></p>
                <p>> <span class='orange'>шагов выполнено 7/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "pump.test") {
            output.insertAdjacentHTML("beforeend", `
                <p>> помпа прошла тестирование.</p>
                <p>> устраните заклинивание кофемолки при помощи <span class='green'>grinder.unjam</span></p>
                <p>> <span class='orange'>шагов выполнено 8/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "grinder.unjam") {
            output.insertAdjacentHTML("beforeend", `
                <p>> заклинивание кофемолки устранено.</p>
                <p>> откалибруйте кофемолку при помощи <span class='green'>grinder.calibrate</span></p>
                <p>> <span class='orange'>шагов выполнено 9/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "grinder.calibrate") {
            output.insertAdjacentHTML("beforeend", `
                <p>> кофемолка откалибрована.</p>
                <p>> восстановите нагреватель при помощи <span class='green'>heater.repair</span></p>
                <p>> <span class='orange'>шагов выполнено 10/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "heater.repair") {
            output.insertAdjacentHTML("beforeend", `
                <p>> нагреватель восстановлен.</p>
                <p>> проверьте нагреватель при помощи <span class='green'>heater.test</span></p>
                <p>> <span class='orange'>шагов выполнено 11/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "heater.test") {
            output.insertAdjacentHTML("beforeend", `
                <p>> нагреватель прошёл тестирование. температура нестабильна.</p>
                <p>> очистите заварочный блок при помощи <span class='green'>brew.unit.clean</span></p>
                <p>> <span class='orange'>шагов выполнено 12/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "brew.unit.clean") {
            output.insertAdjacentHTML("beforeend", `
                <p>> заварочный блок очищен.</p>
                <p>> установите заварочный блок при помощи <span class='green'>brew.unit.install</span></p>
                <p>> <span class='orange'>шагов выполнено 13/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "brew.unit.install") {
            output.insertAdjacentHTML("beforeend", `
                <p>> заварочный блок установлен.</p>
                <p>> откалибруйте датчики при помощи <span class='green'>sensor.calibrate</span></p>
                <p>> <span class='orange'>шагов выполнено 14/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "sensor.calibrate") {
            output.insertAdjacentHTML("beforeend", `
                <p>> датчики откалиброваны.</p>
                <p>> восстановите прошивку при помощи <span class='green'>firmware.repair</span></p>
                <p>> <span class='orange'>шагов выполнено 15/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "firmware.repair") {
            output.insertAdjacentHTML("beforeend", `
                <p>> прошивка восстановлена.</p>
                <p>> активируйте дисплей при помощи <span class='green'>display.enable</span></p>
                <p>> <span class='orange'>шагов выполнено 16/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "display.enable") {
            output.insertAdjacentHTML("beforeend", `
                <p>> дисплей активирован.</p>
                <p>> проверьте наличие чашки при помощи <span class='green'>cup.detect</span></p>
                <p>> <span class='orange'>шагов выполнено 17/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "cup.detect") {
            output.insertAdjacentHTML("beforeend", `
                <p>> чашка обнаружена.</p>
                <p>> загрузите кофейные зёрна при помощи <span class='green'>beans.load</span></p>
                <p>> <span class='orange'>шагов выполнено 18/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "beans.load") {
            output.insertAdjacentHTML("beforeend", `
                <p>> кофейные зёрна загружены.</p>
                <p>> выполните помол зёрен при помощи <span class='green'>coffee.grind</span></p>
                <p>> <span class='orange'>шагов выполнено 19/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "coffee.grind") {
            output.insertAdjacentHTML("beforeend", `
                <p>> зёрна успешно смолоты.</p>
                <p>> приготовьте кофе при помощи <span class='green'>coffee.brew</span></p>
                <p>> <span class='orange'>шагов выполнено 20/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "coffee.brew") {
            output.insertAdjacentHTML("beforeend", `
                <p>> кофе приготовлен.</p>
                <p>> выдайте кофе в чашку при помощи <span class='green'>coffee.dispense</span></p>
                <p>> <span class='orange'>шагов выполнено 21/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "coffee.dispense") {
            output.insertAdjacentHTML("beforeend", `
                <p>> кофе выдан в чашку.</p>
                <p>> проверьте содержимое чашки при помощи <span class='green'>coffee.verify</span></p>
                <p>> <span class='orange'>шагов выполнено 22/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "coffee.verify") {
            output.insertAdjacentHTML("beforeend", `
                <p>> проверка пройдена. это действительно кофе.</p>
                <p>> для завершения процедуры выполните <span class='green'>operator.drink</span></p>
                <p>> <span class='orange'>шагов выполнено 23/24</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
        else if (command === "operator.drink") {
            output.insertAdjacentHTML("beforeend", `
                <p>> <span class='red'>кофе оказался слишком горячим, вы обожгли свой язык.</span></p>
                <p>> <span class='green'>процедура успешно завершена.</span></p>
            `);
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }




        else output.insertAdjacentHTML("beforeend", "<p>> <span class='red'>ошибка: неизвестная команда.</span></p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
});