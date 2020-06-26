#!/usr/bin/env node

const program = require('commander');
const prompts = require('prompts');
const wallet = require('./wallet');

program
    .command('init')
    .description('Init a new HD crypto wallet.')
    .action(
        async () => {
            try {
                const { automatic } = await prompts({
                    type: 'confirm',
                    name: 'automatic',
                    message: 'Would you like to generate a random mnemonic?'
                })
                if (automatic) {
                    const { length } = await prompts({
                        type: 'select',
                        name: 'length',
                        message: 'Length of your mnemonic?',
                        choices: [
                            { title: '12', value: 12 },
                            { title: '15', value: 15 },
                            { title: '18', value: 18 },
                            { title: '21', value: 21 },
                            { title: '24', value: 24 },
                        ]
                    })
                    const words = wallet.createMasterWallet(length);
                    const { record } = await prompts({
                        type: 'text',
                        name: 'record',
                        message: 'Type Yes if you saved the mnemonic safely.',
                        validate: value => 
                            value !== 'Yes' 
                            ? 
                            `Please record it safely.` : true
                    })
                    wallet.initRootPubKey(words);
                    console.clear();
                    console.log('\x1b[32m%s\x1b[0m','crypto-wallet-generator init successfully');
                } else {
                    const { mnemonic } = await prompts({
                        type: 'text',
                        name: 'mnemonic',
                        message: 'Please type in your mnemonic',
                        initial: 'injury foam window volcano young again pottery chair diagram peasant rebel burst',
                        validate: value => 
                            value === 'injury foam window volcano young again pottery chair diagram peasant rebel burst' 
                            ? 
                            `Do not use example value` : true
                    })
                    wallet.initRootPubKey(mnemonic);
                    console.clear();
                    console.log('\x1b[32m%s\x1b[0m','crypto-wallet-generator init successfully');
                }
            } catch (error) {
                console.log(error)
                console.log('\n\n\n\nLeaving...')
            }

        }
    )

program.parse(process.argv);
